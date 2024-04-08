'use client'
import { AppStore, store } from "@/store/store"
import { useRef } from "react"
import { Provider } from "react-redux"

interface Props {
    children: React.ReactNode
}

export default  function StoreProvider({ children }: Props) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) storeRef.current = store()
    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}
