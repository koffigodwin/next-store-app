import Link from "next/link"
import Hero from "@/components/home/Hero"
import FearturedProducts from "@/components/home/FearturedProducts"
import { Suspense } from "react"
import LoadingContainer from "@/components/global/LoadingContainer"
function Homepage () {


return (
  <>
  <Hero/>
  <Suspense fallback={<LoadingContainer/>}>
  <FearturedProducts/>
  </Suspense>
  </>
)
}
export default Homepage