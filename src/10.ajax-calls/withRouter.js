import {useParams} from "react-router-dom"

export const WithRouter = (Child) => {
    const params = useParams()
    return () => <Child params={params} />
}