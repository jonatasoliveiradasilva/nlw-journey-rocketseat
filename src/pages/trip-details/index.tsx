import { Plus } from "lucide-react";
import { useState } from "react";

import CreateActivityModal from "../../pages/trip-details/create-activity-modal";
import ImportantLinks from "../../pages/trip-details/important-links";
import Guests from "../../pages/trip-details/guests";
import Activities from "../../pages/trip-details/activities";
import DestinationAndDateHeader from "../../pages/trip-details/destination-and-date-header";

function TripDetailsPage() {

    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true);
    }

    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false);
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationAndDateHeader />
            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button
                            onClick={openCreateActivityModal}
                            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                            <Plus className="size-5" />
                            Cadastrar atividade
                        </button>
                    </div>
                    <Activities />
                </div>
                <div className="w-80 space-y-6">
                    <ImportantLinks />
                    <Guests />
                    <div className="w-full h-px bg-zinc-800" />
                    <div></div>
                </div>
            </main>
            {
                isCreateActivityModalOpen && (
                    <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} />
                )
            }
        </div >
    );
}

export default TripDetailsPage;
