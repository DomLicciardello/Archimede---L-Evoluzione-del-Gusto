import React from 'react'
import SiteCarousel from '../carousel/SiteCarousel';
import SiteHomeChiSiamo from '../home/SiteHomeChiSiamo';
import SiteHomeProdotti from '../home/SiteHomeProdotti';
import SiteHomeFooter from '../home/SiteHomeFooter';
import SiteNavbar from '../navbar/SiteNavbar';
import SiteHomeRecensioni from '../home/SiteHomeRecensioni';
import SiteHomeInstagram from '../home/SiteHomeInstagram';

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
