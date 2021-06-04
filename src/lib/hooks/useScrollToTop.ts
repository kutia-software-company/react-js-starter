import { useEffect } from "react"
import { useRouter } from "./useRouter"
export const useScrollToTop = () => {
  const router = useRouter()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.location.pathname])
}
