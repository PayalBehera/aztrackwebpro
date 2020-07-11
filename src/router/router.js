import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

// Containers
const TheContainer = () => import('@/containers/TheContainer')

const Login = () => import('../views/login/Login')
const Dashboard = () => import('../views/dashboard/Dashboard')
const Forgetpwd = () => import('../views/forgotpwd/Forgotpassword')
const Device = () => import('@/views/Device')
const Vehicle = () => import('@/views/Vehicle')
const Driver = () => import('@/views/Driver')
const Transit = () => import('@/views/Transit')
const VehicleAssociation = () => import('@/views/VehicleAssociation')
export const router = new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes() {
    return [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Home',
            component: TheContainer,
            children: [
                {
                path: '/dashboard',
                name: 'dashboard',
                component: Dashboard,
                beforeEnter: (to, from, next) => {
                    if (store.state.auth.authenticated == true) {
                        next(); 
                    } else {
                        next(false);
                    }
                }
            },
            {
            path: '/device',
            name: 'device',
            component: Device
            },
            {
                path: '/vehicle',
                name: 'vehicle',
                component: Vehicle
                },
                {
                    path: '/driver',
                    name: 'driver',
                    component: Driver
                    },
                    {
                        path: '/transit',
                        name: 'transit',
                        component: Transit
                        },
                        {
                            path: '/association',
                            name: 'association',
                            component:VehicleAssociation
                            },
            ]
        },
        {
            path: '/forgetpwd',
            component: Forgetpwd
        },
        // {
        //     path: '/',
        //     redirect: {
        //         name: 'login'
        //     }
        // },
        {
            path: '*',
            component: Login
        }
    ]
}