// components/layout/Footer.tsx

export default function Footer() {
  return (
    <footer className="absolute w-full  -bottom-2 left-0 right-0 rounded-t-full mx-auto bg-[#0D0D0D] py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-gray-400 leading-relaxed">
          11B, Pelewura Close, Apapa, <br />
          Lagos State, Nigeria
        </p>

        <div className="w-10 border-t border-gray-700" />

        <p className="text-xs text-gray-600">
          &copy; 2026 Trukkas. All rights reserved.
        </p>
      </div>
    </footer>
  )
}