import { useState, useEffect } from "react"

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`${url}?_page=1&_limit=9`)
      .then((response) => response.json("Link"))
      .then((d) => {
        setData(d)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [url])
  return { data, loading, error, isError: !!error, isSuccess: !!data }
}

export default useFetch
