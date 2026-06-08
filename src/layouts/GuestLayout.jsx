import { Outlet } from 'react-router-dom';
// Hapus import GuestHeader ini jika ada:
// import GuestHeader from '../components/guest/GuestHeader';

const GuestLayout = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 w-full flex flex-col">
      
      {/* <GuestHeader />  <-- HAPUS ATAU KOMENTARI BARIS INI */}
      
      <main className="w-full flex-1">
        <Outlet />
      </main>

    </div>
  );
};

export default GuestLayout;