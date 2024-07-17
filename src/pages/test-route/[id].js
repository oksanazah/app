import {useRouter} from "next/router";
export default function TestRoutedById() {
    const router = useRouter();
    return <h1>{router.query.id}</h1>
}