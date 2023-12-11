'use client';
import Splash from "@/components/spalsh";
import http from "@/helpers/http";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const RootState = createContext();

export function useRootState() {
  return useContext(RootState);
}

function RootStateContainer({ children }) {
  const [globalState, setGlobalState] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectedCard, setSelectedCard] = useState('');

  const router = useRouter()
  const pathname = usePathname()
  const isAuthPage = pathname.includes('/auth')

  useEffect(() => {
    setSelectedAddress('')
    setSelectedShipping('')
    setSelectedCard('')

    if (pathname.includes('/auth')) {
      if (globalState.user) {
        setIsLoading(true)
        router.push('/')
      } else {
        setIsLoading(false)
      }
    } else {
      // console.log('globalState updated');
      const keys = ['products', 'categories', 'sponsors', 'shippings'];
      if (keys.every(key => globalState[key] === undefined)) {
        setIsLoading(true)
        const uri = globalState.user ? 'user' : 'dashboard';
        http.get('/' + uri, {
          headers: {
            Authorization: `Bearer ${globalState.token}`
          }
        }).then(({ data }) => {
          setGlobalState({
            ...globalState,
            ...data,
          });
          setIsLoading(false);
        }).catch(err => {
          setError(err.response?.data.message || err.message);
        });
      } else if (isLoading) {
        setIsLoading(false);
      }
    }
  }, [globalState, pathname]);

  const states = {
    globalState, setGlobalState,
    error, setError,
    cart, setCart,
    selectedShipping, setSelectedShipping,
    selectedAddress, setSelectedAddress,
    selectedCard, setSelectedCard
  }

  return (
    <RootState.Provider value={states}>
      <div className={(isAuthPage || isLoading ? 'bg-primary' : 'bg-light') + ' root-wrapper'}>
        {isLoading ? <Splash /> : children}
      </div>
    </RootState.Provider>
  );
}

export default RootStateContainer;