import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TCAS69 - ระบบการคัดเลือกบุคคลเข้าศึกษาต่อในระดับมหาวิทยาลัย ปีการศึกษา 2569" },
      { name: "description", content: "A-Level Results Hub displays A-Level exam results for nine subjects." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "TCAS69 - ระบบการคัดเลือกบุคคลเข้าศึกษาต่อในระดับมหาวิทยาลัย ปีการศึกษา 2569" },
      { property: "og:description", content: "A-Level Results Hub displays A-Level exam results for nine subjects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "TCAS69 - ระบบการคัดเลือกบุคคลเข้าศึกษาต่อในระดับมหาวิทยาลัย ปีการศึกษา 2569" },
      { name: "twitter:description", content: "A-Level Results Hub displays A-Level exam results for nine subjects." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f8222f65-095f-4413-ba74-d69902c68182/id-preview-9e3bc641--bf03cb6b-0725-440a-a877-bab13fdd8501.lovable.app-1776946681983.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f8222f65-095f-4413-ba74-d69902c68182/id-preview-9e3bc641--bf03cb6b-0725-440a-a877-bab13fdd8501.lovable.app-1776946681983.png" },
    ],
    links: [
      {
        rel: "icon",
        href: "https://student.mytcas.com/assets/img/icon.svg",
        type: "image/svg+xml",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="min-h-screen">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
