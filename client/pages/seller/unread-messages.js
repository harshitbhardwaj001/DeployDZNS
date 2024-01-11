import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useStateProvider } from '../../context/StateContext';

const UnreadMessages = () => {
    const [cookies] = useCookies();
    const [{ userInfo }] = useStateProvider();
    useEffect(() => {
        // const getUnreadMessages
    }, [])
  return (
    <div></div>
  )
}

export default UnreadMessages