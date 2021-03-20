import Home from './components/home/home'
import About from './components/about/about'

const routes = {
    "/": () => <Home />,
    "/about": () => <About />,
    "/user/:id": ({id}) => <Home userId={id} />
}
export default routes