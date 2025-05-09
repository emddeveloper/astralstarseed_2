import { Routes } from '@angular/router';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { TarotComponent } from './modules/shared/components/tarot/tarot.component';
import { ReikiComponent } from './modules/shared/components/reiki/reiki.component';
import { NumerologyComponent } from './modules/shared/components/numerology/numerology.component';
import { VaastuComponent } from './modules/shared/components/vaastu/vaastu.component';
import { AkashicComponent } from './modules/shared/components/akashic/akashic.component';
import { HealingRitualsComponent } from './modules/shared/components/healing-rituals/healing-rituals.component';
import { CrystalTherapyComponent } from './modules/shared/components/crystal-therapy/crystal-therapy.component';
import { CrystalBallGazingComponent } from './modules/shared/components/crystal-ball-gazing/crystal-ball-gazing.component';
import { SwitchwordsComponent } from './modules/shared/components/switchwords/switchwords.component';
import { RunesComponent } from './modules/shared/components/runes/runes.component';
import { AboutusComponent } from './modules/shared/components/aboutus/aboutus.component';
import { ContactComponent } from './modules/shared/components/contact/contact.component';
import { PaymentComponent } from './modules/shared/components/payment/payment.component';
import { PriceComponent } from './modules/shared/components/price/price.component';
import { ScientificLogoDesignComponent } from './modules/shared/components/scientific-logo-design/scientific-logo-design.component';
import { LogoPackagesComponent } from './modules/shared/components/logo-packages/logo-packages.component';
import { SignatureAnalysisComponent } from './modules/shared/components/signature-analysis/signature-analysis.component';
import { FaceReadingSamudrikShastraComponent } from './modules/shared/components/face-reading-samudrik-shastra/face-reading-samudrik-shastra.component';
import { PalmistryComponent } from './modules/shared/components/palmistry/palmistry.component';
import { ChakraHhealingBalancingComponent } from './modules/shared/components/chakra-hhealing-balancing/chakra-hhealing-balancing.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tarot', component: TarotComponent },
    { path: 'reiki', component: ReikiComponent },
    { path: 'numerology', component: NumerologyComponent },
    { path: 'vaastu', component: VaastuComponent },
    { path: 'akashic', component: AkashicComponent },
    { path: 'healingRituals', component: HealingRitualsComponent },
    { path: 'crystalTherapy', component: CrystalTherapyComponent },
    { path: 'crystalBallGazing', component: CrystalBallGazingComponent },
    { path: 'switchwords', component: SwitchwordsComponent },
    { path: 'runes', component: RunesComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'price', component:PriceComponent  },
    { path: 'payment', component: PaymentComponent },
    { path: 'scientificLogoDesign', component: ScientificLogoDesignComponent },
    { path: 'logoPackages', component: LogoPackagesComponent },
    { path: 'signatureAnalysis', component: SignatureAnalysisComponent },
    { path: 'face-reading-samudrik-shastra', component: FaceReadingSamudrikShastraComponent },
    { path: 'palmistry', component: PalmistryComponent },
    { path: 'chakra-healing', component: ChakraHhealingBalancingComponent },
];
