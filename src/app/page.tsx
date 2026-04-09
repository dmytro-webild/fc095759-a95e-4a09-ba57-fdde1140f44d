"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="circleGradient"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Classes",
          id: "#classes",
        },
        {
          name: "Trainers",
          id: "#trainers",
        },
        {
          name: "Membership",
          id: "#membership",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Oscar Fitness"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "radial-gradient",
      }}
      title="Unleash Your Potential at Oscar Fitness"
      description="Experience premium fitness in Salem's most modern facility. Elevate your performance with world-class equipment and dedicated trainers."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/defocused-bikes_1203-370.jpg",
          imageAlt: "Gym interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-sports-people-training-morning-gym_1157-32104.jpg",
          imageAlt: "Fitness class",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dumbells-still-life-studio_23-2151747216.jpg",
          imageAlt: "Trainer session",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-gym-fitness-room_74190-4648.jpg",
          imageAlt: "Modern gym equipment",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/exercise-international-group-relaxation-fitness-concept_53876-23480.jpg",
          imageAlt: "Group training space",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="classes" data-section="classes">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Strength Training",
          description: "Build muscle and improve endurance with our professional-grade weight lifting equipment.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-gym-fitness-room_74190-4648.jpg",
        },
        {
          title: "Group Cardio",
          description: "Join our dynamic group sessions designed to torch calories and improve heart health.",
          imageSrc: "http://img.b2bpic.net/free-photo/exercise-international-group-relaxation-fitness-concept_53876-23480.jpg",
        },
        {
          title: "Recovery Zone",
          description: "Relax and recharge in our dedicated recovery area featuring state-of-the-art amenities.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-training-with-dumbbell_23-2149144793.jpg",
        },
      ]}
      title="World-Class Classes"
      description="From high-intensity interval training to restorative yoga, we provide diverse sessions for every fitness level."
    />
  </div>

  <div id="trainers" data-section="trainers">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "t1",
          name: "Rajesh Kumar",
          role: "Head Fitness Coach",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-sporty-black-man-standing-with-his-arms-crossed_1262-16419.jpg",
        },
        {
          id: "t2",
          name: "Priya Vimal",
          role: "Yoga Specialist",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sportive-girl-posing-with-crossed-arms-dark-wall_176420-622.jpg",
        },
        {
          id: "t3",
          name: "Vikram Singh",
          role: "Strength & Conditioning",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-gym_74190-3783.jpg",
        },
      ]}
      title="Meet Our Expert Trainers"
      description="Our certified coaches are dedicated to your transformation with personalized guidance."
    />
  </div>

  <div id="membership" data-section="membership">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          price: "₹1,500/mo",
          name: "Basic Access",
          buttons: [
            {
              text: "Sign Up",
              href: "#contact",
            },
          ],
          features: [
            "Full Gym Access",
            "Locker Room",
            "Orientation",
          ],
        },
        {
          id: "pro",
          price: "₹2,500/mo",
          name: "Professional",
          buttons: [
            {
              text: "Sign Up",
              href: "#contact",
            },
          ],
          features: [
            "All Basic Features",
            "Personal Training",
            "Group Classes",
          ],
        },
        {
          id: "elite",
          price: "₹3,500/mo",
          name: "Elite VIP",
          buttons: [
            {
              text: "Sign Up",
              href: "#contact",
            },
          ],
          features: [
            "All Pro Features",
            "Nutrition Coaching",
            "Guest Passes",
          ],
        },
      ]}
      title="Flexible Membership Plans"
      description="Choose the membership that fits your goals and lifestyle."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Karthi Mechanical",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-business-woman-pointing-camera-smiling_1098-20747.jpg",
        },
        {
          id: "2",
          name: "Ganesan GEE",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sportswear-beach_273609-5368.jpg",
        },
        {
          id: "3",
          name: "Vimal Kamaraj",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-man-twerking_23-2149879701.jpg",
        },
        {
          id: "4",
          name: "Kathirvel Kc",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-african-fitness-woman-smiling-holding-sporting-mat-home_171337-8008.jpg",
        },
        {
          id: "5",
          name: "Guru Moorthy",
          imageSrc: "http://img.b2bpic.net/free-photo/wellbeing-smiling-asian-fitness-girl-runner-park-smiling-running-doing-jogging-workout_1258-198690.jpg",
        },
      ]}
      cardTitle="Member Success Stories"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "What are your operating hours?",
          content: "We are open daily from 6 AM to 9 PM.",
        },
        {
          id: "f2",
          title: "Do you provide personal trainers?",
          content: "Yes, we have certified professionals available for 1-on-1 sessions.",
        },
        {
          id: "f3",
          title: "Is parking available?",
          content: "Yes, ample parking space is available right outside the gym.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Everything you need to know about our memberships and services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Start Your Fitness Journey Today"
      description="Have questions? Visit us at Elampillai Road, Salem or contact us directly at 080152 45240."
      imageSrc="http://img.b2bpic.net/free-photo/ritual-calm-sauna-light-woman-by-door_169016-69085.jpg"
      mediaPosition="right"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Oscar Fitness"
      leftLink={{
        text: "Terms of Service",
        href: "#",
      }}
      rightLink={{
        text: "Privacy Policy",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
