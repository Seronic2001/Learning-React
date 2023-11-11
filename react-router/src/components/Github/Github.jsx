import { useLoaderData } from "react-router-dom"


function Github() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/seronic2001')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // }, [])

  const data = useLoaderData()
  return (
    <div className="text-center bg-gray-700 text-white text-3xl p-4">Github Follwers : {data.followers}
        <div className="flex justify-center mt-4 p-4">
        <img src={data.avatar_url} alt="Profile Image" width={200} />
        </div>
    </div>
  ) 
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/seronic2001')
  return res.json()
}