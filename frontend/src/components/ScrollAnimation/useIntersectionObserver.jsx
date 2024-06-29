import { useEffect, useState } from 'react'

const useIntersectionObserver = (ref, options = {}) => {
  // Initialize state with null to represent the entry object
  const [entry, setEntry] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Instead of setting visibility, now we set the entire entry
      // Note: This assumes single entry tracking, adjust as needed for multiple
      entries.forEach((entry) => {
        setEntry(entry)
      })
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  // Return the entire entry object for more flexibility
  return entry
}

export default useIntersectionObserver
