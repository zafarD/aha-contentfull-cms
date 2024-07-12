
import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: 'master',
    accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProjects = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [projects, setProjects] = useState([])

    const getData = async() => {
        try {
            const res = await client.getEntries({ content_type: 'projects' })
            const projects = res.items.map((item) => {
                const {image, title, url} = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                return {id, title, img, url}
            })
            setProjects(projects)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        getData()
    }, [])
    return {isLoading, projects}
}
