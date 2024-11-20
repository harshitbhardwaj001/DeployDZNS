import { HeroSection } from '../components/HeroSection';
import { StateProvider } from '../context/StateContext';
import reducer, { initialeState } from '../context/StateReducers';
import '../styles/globals.css'
import { gsap, CSSPlugin, CSSRulePlugin } from 'gsap/all';
gsap.registerPlugin(CSSPlugin, CSSRulePlugin)


export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialeState} reducer={reducer}>
      <HeroSection/>
    </StateProvider>
  )
}
