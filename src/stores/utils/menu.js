import { ChartNoAxesCombined, Hospital, Stethoscope, SquareActivity, ShieldPlus, BriefcaseMedical, BookUser, Microscope } from 'lucide-vue-next'


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
  },
  {
    path: 'doctor',
    name: 'Doctor',
    component: () => import('@/views/pages/DoctorView.vue'),
    title: 'Shifokorlar',
    icon: BriefcaseMedical
  },
  {
    path: 'patsient',
    name: 'Patsient',
    component: () => import('@/views/pages/PatsientView.vue'),
    title: 'Bemorlar',
    icon: BookUser
  },
  {
    path: 'service',
    name: 'Service',
    component: () => import('@/views/pages/ServiceView.vue'),
    title: 'Xizmatlar',
    icon: Microscope
  },
  {
    path: 'treatment',
    name: 'Treatment',
    component: () => import('@/views/pages/TreatmentView.vue'),
    title: 'Davolash',
    icon: SquareActivity
  }
]