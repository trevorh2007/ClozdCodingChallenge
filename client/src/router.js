import Home from './components/home/home'
import About from './components/about/about'
import UserDetails from './components/user-details/userdetails'

const routes = {
    "/": () => (data, setUserData) => <Home data={data} setUserData={setUserData}/>,
    "/about": () => () => <About />,
    "/user/:id": ({id}) => (user) => <UserDetails userId={id} user={user} />
}
export default routes