import React from "react"
import { Hero } from "./Hero"
import { Latest } from "./Latest"
import { Contact } from "./Contact/Contact"
import { Services } from "./Services/Services"
import { Testimonial } from "./Testimonial/Testimonial"

export const HomePage = ({ latestNews, latestProduct }) => {
  return (
    <>
      <Hero />
      <Latest latestTitle="Blog" latestNews={latestNews} />
      <Services />
      <Latest latestTitle="Shop" latestProduct={latestProduct} />
      <Testimonial />
      <Contact />
    </>
  )
}
