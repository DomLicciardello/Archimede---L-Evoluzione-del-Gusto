import React from 'react'
import SiteCarousel from '../components/carousel/SiteCarousel';
import SiteHomeChiSiamo from '../components/home/SiteHomeChiSiamo';
import SiteHomeProdotti from '../components/home/SiteHomeProdotti';
import SiteHomeFooter from '../components/home/SiteHomeFooter';
import SiteNavbar from '../components/navbar/SiteNavbar';
import SiteHomeRecensioni from '../components/home/SiteHomeRecensioni';
import SiteHomeInstagram from '../components/home/SiteHomeInstagram';

export default function Home() {
  return (
    <>
    <SiteNavbar></SiteNavbar>
    <SiteCarousel></SiteCarousel>
    <SiteHomeChiSiamo></SiteHomeChiSiamo>
    <SiteHomeProdotti></SiteHomeProdotti>
    <SiteHomeInstagram></SiteHomeInstagram>
    <SiteHomeRecensioni></SiteHomeRecensioni>
    <SiteHomeFooter></SiteHomeFooter>
    </>
  )
}
