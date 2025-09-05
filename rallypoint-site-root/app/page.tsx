"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Shield, Users, Heart, Stethoscope, MessageSquare, Clock, ArrowRight, CheckCircle, Video } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const BRAND = {
  name: "Rally Point Family & Wellness",
  primary: "#164C3A",
  accent: "#C0D9CD",
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium text-slate-800 hover:text-slate-950 transition-colors">
    {children}
  </a>
);

const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <Card className="rounded-2xl shadow-sm">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl" style={{ backgroundColor: BRAND.accent }}>
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-semibold" style={{ color: BRAND.primary }}>{value}</div>
    <div className="text-slate-600 text-sm mt-1">{label}</div>
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 mt-0.5" style={{ color: BRAND.primary }} /> <span className="text-slate-700">{children}</span></li>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Bar */}
      <div className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full flex items-center justify-center border" style={{ borderColor: BRAND.primary }}>
              <span className="font-semibold" style={{ color: BRAND.primary }}>RP</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold">{BRAND.name}</div>
              <div className="text-xs text-slate-500">Client-centered mental health care</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#military">Services</NavLink>
            <NavLink href="#first-responders">First Responders</NavLink>
            <NavLink href="#telehealth">Telehealth</NavLink>
            <NavLink href="#insurance">Insurance</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+1-555-555-5555" className="flex items-center gap-2 text-sm font-medium" style={{ color: BRAND.primary }}>
              <Phone className="h-4 w-4" /> (555) 555-5555
            </a>
            <a href="#contact">
              <Button className="rounded-2xl">Book a consult</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="bg-gradient-to-b from-white to-[rgba(22,76,58,0.05)]">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              A rally point for healing—
              <span className="block" style={{ color: BRAND.primary }}>clear direction, steady support.</span>
            </h1>
            <p className="mt-4 text-slate-600 max-w-xl">
              Evidence-based therapy for individuals, couples, and families—with a special commitment to first responders, service members, and their loved ones. In-person and secure telehealth across California.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact"><Button className="rounded-2xl px-6">Request an appointment</Button></a>
              <a href="#services"><Button variant="outline" className="rounded-2xl px-6">Explore services <ArrowRight className="ml-2 h-4 w-4 inline" /></Button></a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6">
              <Stat value="Individual Therapy" label="Levels of care" />
              <Stat value="HIPAA" label="Secure telehealth" />
              <Stat value="CA" label="Statewide care" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border" style={{ borderColor: BRAND.accent }}>
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="Calm trail through forest" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium">Your path. Your pace.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services */}
      <Section id="services">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
            <p className="text-slate-600 mt-2">Personalized, culturally responsive care. We meet you at the rally point and move together toward what matters.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Feature icon={Stethoscope} title="Individual Therapy" desc="Anxiety, depression, trauma/PTSD, stress, and life transitions. Evidence-based modalities tailored to your goals." />
            <Feature icon={Users} title="Couples & Family" desc="Strengthen communication, rebuild trust, and navigate change with structured, supportive sessions." />
            <Feature icon={MessageSquare} title="Group Therapy" desc="Skills-focused and process groups that balance structure with connection. IOP and outpatient options." />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Feature icon={Heart} title="Trauma-Informed Care" desc="EMDR-informed, CBT/DBT, and compassion-focused approaches delivered with steadiness and care." />
            <Feature icon={Shield} title="Confidential & Secure" desc="HIPAA-compliant telehealth, private portals, and clear boundaries to protect your story." />
            <Feature icon={Clock} title="Flexible Scheduling" desc="Evening/virtual availability with timely responses and streamlined onboarding." />
          </div>
        </div>
      </Section>

      {/* First Responders */}
      <Section id="first-responders" className="bg-[rgba(22,76,58,0.03)]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Dedicated support for first responders & military families</h2>
            <p className="text-slate-600 mt-3">We understand high-tempo work, critical incident stress, and the culture of service. Care is practical, confidential, and mission-informed.</p>
            <ul className="mt-5 space-y-2">
              <ListItem>PTSD and moral injury support with pacing that respects readiness.</ListItem>
              <ListItem>Shift-work aware scheduling; discreet telehealth when needed.</ListItem>
              <ListItem>Family-inclusive care to steady the whole system.</ListItem>
            </ul>
            <div className="mt-6">
              <a href="#contact"><Button className="rounded-2xl">Get matched with a clinician</Button></a>
            </div>
          </div>
          <div>
            <Card className="rounded-3xl border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Common concerns we treat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    "Operational stress",
                    "PTSD & flashbacks",
                    "Anxiety & panic",
                    "Depression",
                    "Sleep disruption",
                    "Grief & loss",
                    "Relationship strain",
                    "Anger & reactivity",
                  ].map((item) => (
                    <div key={item} className="px-3 py-2 rounded-xl bg-white border flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND.primary }} />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Telehealth */}
      <Section id="telehealth">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-video rounded-3xl overflow-hidden border shadow-sm">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" alt="Telehealth session" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold">Secure telehealth across California</h2>
            <p className="text-slate-600 mt-3">Private, reliable video sessions that meet HIPAA standards. Intake, consent forms, and messaging are handled in a secure portal.</p>
            <ul className="mt-5 space-y-2">
              <ListItem>Works on phone, tablet, or computer—no special software required.</ListItem>
              <ListItem>Perfect for travel, shift work, or childcare constraints.</ListItem>
              <ListItem>Simple, clear onboarding so you can focus on care.</ListItem>
            </ul>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
              <Video className="h-4 w-4" /> Test call available by request.
            </div>
          </div>
        </div>
      </Section>

      {/* Insurance & Rates */}
      <Section id="insurance" className="bg-[rgba(22,76,58,0.03)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Insurance & rates</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">We work to make care accessible. We are in-network with select plans and can provide superbills for out-of-network reimbursement. Sliding scale may be available based on need.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="rounded-2xl border">
              <CardHeader>
                <CardTitle className="text-lg">Insurance</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2">
                <p>Add your accepted plans here (e.g., Tricare, Kaiser, etc.).</p>
                <p>We verify benefits before your first appointment.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border">
              <CardHeader>
                <CardTitle className="text-lg">Rates</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2">
                <p>Initial intake: $___</p>
                <p>Individual session (50 min): $___</p>
                <p>Couples/Family (50–80 min): $___</p>
                <p>Group/IOP: Inquire for program rates</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border">
              <CardHeader>
                <CardTitle className="text-lg">Good Faith Estimates</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                We provide Good Faith Estimates consistent with the No Surprises Act for clients who self-pay or are out-of-network.
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section id="team">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Meet the team</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">Licensed clinicians and support staff who lead with steadiness and respect. Add bios and headshots as you hire.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Doyle San Nicolas, LMFT", role: "Founder & Psychotherapist", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" },
              { name: "Add Name", role: "Psychotherapist", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop" },
              { name: "Add Name", role: "Intake Coordinator", img: "https://images.unsplash.com/photo-1541214113241-7f4bfaad5d37?q=80&w=1000&auto=format&fit=crop" },
            ].map((m) => (
              <Card key={m.name} className="rounded-2xl overflow-hidden border">
                <img src={m.img} alt={m.name} className="h-56 w-full object-cover" />
                <CardHeader>
                  <CardTitle className="text-lg">{m.name}</CardTitle>
                  <div className="text-slate-600 text-sm">{m.role}</div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Forms & FAQs */}
      <Section id="forms">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Client forms</h3>
            <p className="text-slate-600 mt-2 text-sm">Link your EHR portal here. Add downloadable PDFs if needed.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="underline" href="#">Intake & Consent</a></li>
              <li><a className="underline" href="#">Telehealth Consent</a></li>
              <li><a className="underline" href="#">HIPAA Notice of Privacy Practices</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">FAQs</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li><strong>Do you offer evening appointments?</strong> Yes, limited availability—please inquire.</li>
              <li><strong>Is telehealth as effective as in-person?</strong> Research supports comparable outcomes for many concerns.</li>
              <li><strong>Do you work with first responders?</strong> Yes—confidential, culturally aware care is a priority.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-[rgba(22,76,58,0.03)]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
            <p className="text-slate-600 mt-2">Have a question or want to schedule? Send a message and our intake team will reach out within one business day.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" style={{ color: BRAND.primary }} /> (555) 555-5555</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" style={{ color: BRAND.primary }} /> hello@rallypointwellness.com</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: BRAND.primary }} /> Ventura, California (Telehealth statewide)</div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will contact you shortly.'); }}>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="First name" required />
              <Input placeholder="Last name" required />
            </div>
            <Input type="email" placeholder="Email" required />
            <Input type="tel" placeholder="Phone" />
            <Textarea placeholder="How can we help?" className="min-h-[120px]" />
            <div className="text-xs text-slate-500">By submitting, you agree to be contacted about scheduling. Please avoid sharing sensitive details. This form is not for emergencies.</div>
            <Button type="submit" className="w-full rounded-2xl">Send message</Button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full flex items-center justify-center border" style={{ borderColor: BRAND.primary }}>
                <span className="font-semibold" style={{ color: BRAND.primary }}>RP</span>
              </div>
              <div className="font-semibold">{BRAND.name}</div>
            </div>
            <p className="text-slate-600 mt-3">Mental health care with clear direction. In-person (as available) and telehealth across California.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Explore</div>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="#services">Services</a></li>
              <li><a className="hover:underline" href="#first-responders">First Responders</a></li>
              <li><a className="hover:underline" href="#telehealth">Telehealth</a></li>
              <li><a className="hover:underline" href="#insurance">Insurance</a></li>
              <li><a className="hover:underline" href="#team">Team</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Policies</div>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="#">Privacy</a></li>
              <li><a className="hover:underline" href="#">Terms</a></li>
              <li><a className="hover:underline" href="#">Good Faith Estimate</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
      </footer>
    </div>
  );
}
