import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="grid overflow-hidden border border-border md:grid-cols-[1.05fr_0.95fr]">
      <div className="relative isolate overflow-hidden bg-primary p-7 text-primary-foreground sm:p-10">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 -z-10 size-64 rounded-full border border-primary-foreground/20"
        />
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-12 -z-10 size-48 rounded-full border border-primary-foreground/20"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">
          Always glad to meet curious people
        </p>
        <h3 className="mt-6 max-w-md font-display text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl">
          Good things start with a conversation.
        </h3>
        <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/80">
          Have a question, an opportunity, or an idea to explore? I&apos;d love
          to hear from you.
        </p>
        <a
          href={`mailto:${DATA.contact.email}`}
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          Write me an email
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="flex flex-col justify-center gap-6 bg-card p-7 sm:p-10">
        <a
          href={`mailto:${DATA.contact.email}`}
          className="group flex items-start gap-4"
        >
          <span className="flex size-10 shrink-0 items-center justify-center border border-border text-primary">
            <Mail className="size-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Email
            </span>
            <span className="mt-1 block break-all text-sm font-semibold group-hover:text-primary">
              {DATA.contact.email}
            </span>
          </span>
          <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </a>
        <a
          href={`tel:${DATA.contact.tel}`}
          className="group flex items-start gap-4"
        >
          <span className="flex size-10 shrink-0 items-center justify-center border border-border text-primary">
            <Phone className="size-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Phone
            </span>
            <span className="mt-1 block text-sm font-semibold group-hover:text-primary">
              {DATA.contact.tel}
            </span>
          </span>
          <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </a>
        <div className="border-t border-border pt-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Find me elsewhere
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {Object.entries(DATA.contact.social)
              .filter(([name]) => name !== "email")
              .map(([name, social]) => {
                const Icon = social.icon ?? Icons.globe;
                return (
                  <a
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="size-4" />
                    {name}
                    <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
