import { useState, useEffect } from 'react'
import { Registry } from 'cozy-client'

const useAppsInMaintenance = client => {
  const [appsInMaintenance, setAppsInMaintenance] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const registry = new Registry({
        client
      })
      const newAppsInMaintenance = await registry.fetchAppsInMaintenance()
      setAppsInMaintenance(newAppsInMaintenance || [])
    }
    fetchData()
  }, [client])

  return appsInMaintenance
}

export default useAppsInMaintenance
