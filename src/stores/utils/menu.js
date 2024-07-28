import { ChartNoAxesCombined, Hospital, Stethoscope, ShieldPlus } from 'lucide-vue-next'


export const menu = [
  {
    path: '',
    name: 'Home',
    component: () => import('@/views/pages/HomeView.vue'),
    title: 'Bosh sahifa',
    icon: ChartNoAxesCombined
  },
  {
    path: 'depart',
    name: 'Depart',
    component: () => import('@/views/pages/DepartView.vue'),
    title: "Bo'limlar",
    icon: Hospital
  },
  {
    path: 'spec',
    name: 'Spec',
    component: () => import('@/views/pages/SpecView.vue'),
    title: 'Mutaxassisliklar',
    icon: Stethoscope
  },
  {
    path: 'room',
    name: 'Room',
    component: () => import('@/views/pages/RoomView.vue'),
    title: 'Palatalar',
    icon: ShieldPlus
  }
]