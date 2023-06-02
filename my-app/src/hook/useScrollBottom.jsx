import React, { useState, useEffect } from 'react'

export default function useScrollBottom() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop
        setIsBottom(Math.ceil(scrollPosition + window.innerHeight + 50) >= document.documentElement.offsetHeight);
    })
}, []);
  return isBottom
}
