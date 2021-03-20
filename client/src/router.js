import Home from './components/home/home'
import About from './components/about/about'
import UserDetails from './components/user-details/userdetails'

const routes = {
    "/": () => <Home />,
    "/about": () => <About />,
    "/user/:id": ({id}) => <UserDetails userId={id} />
}
export default routes