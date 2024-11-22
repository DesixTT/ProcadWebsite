// src/LandingPage.js
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const LandingPage = ({ open, setOpen }) => {
  return (
    <section
    id="home"
    className="relative bg-cover bg-center h-screen"
    style={{ backgroundImage: 'url("/pictures/image(1).png")' }}
  >
  
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white pt-32 pb-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to Procad</h1>
        <p className="text-xl mb-8">Innovative CAD solutions tailored for your needs</p>
        
        {/* Radix UI Dialog (Modal) */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-96">
              <Dialog.Title className="text-2xl font-bold">Welcome to Procad!</Dialog.Title>
              <Dialog.Description className="mt-2">
                Procad specializes in CAD services, helping you to design, develop, and optimize your projects efficiently.
              </Dialog.Description>
              <div className="mt-4 flex justify-end">
                <Dialog.Close asChild>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                    Close
                  </button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
};

export default LandingPage;
