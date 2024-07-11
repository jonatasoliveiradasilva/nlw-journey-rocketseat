import { FormEvent, useState } from "react";

import { useNavigate } from "react-router-dom";

import InviteGuestsModal from "../../pages/create-trip/invite-guests-modal";
import ConfirmTripModal from "../../pages/create-trip/confirm-trip-modal";
import DestinationAndDateStep from "../../pages/create-trip/steps/destination-and-date-step";
import InviteGuestsStep from "../../pages/create-trip/steps/invite-guests-step";

function CreateTripPage() {

    const navigate = useNavigate();

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

    const [isConfirmTripModalOPen, setIsConfirmTripModalOpen] = useState(false);

    const [emailsToInvite, setEmailsToInvite] = useState([
        "oliveirajonatas@outlook.com.br",
    ]);

    function openGuestsInput() {
        setIsGuestsInputOpen(true);
    }

    function closeGuestsInput() {
        setIsGuestsInputOpen(false);
    }

    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true);
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false);
    }

    function openGuestsModal() {
        setIsGuestsModalOpen(true);
    }

    function closeGuestsModal() {
        setIsGuestsModalOpen(false);
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const email = data.get("email")?.toString();

        if (!email) {
            return;
        }

        if (emailsToInvite.includes(email)) {
            return;
        }

        setEmailsToInvite([
            ...emailsToInvite,
            email,
        ])

        event.currentTarget.reset();
    }

    function removeEmailFromInvites(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove);
        setEmailsToInvite(newEmailList);
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate("/trips/123");
    }

    return (
        <>
            <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
                <div className="max-w-3xl w-full px-6 text-center space-y-10">
                    <div className="flex flex-col items-center gap-3">
                        <img src="/logo.svg" alt="plann.er" />
                        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                    </div>
                    <div className="space-y-4">
                        <DestinationAndDateStep
                            closeGuestsInput={closeGuestsInput}
                            isGuestsInputOpen={isGuestsInputOpen}
                            openGuestsInput={openGuestsInput}
                        />
                        {
                            isGuestsInputOpen && (
                                <InviteGuestsStep
                                    emailsToInvite={emailsToInvite}
                                    openConfirmTripModal={openConfirmTripModal}
                                    openGuestsModal={openGuestsModal}
                                />
                            )
                        }
                    </div>
                    <p className="text-sm text-zinc-500">
                        Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                        com nossos
                        <a
                            className="text-zinc-300 underline"
                            href="#"
                            target="_blank">
                            termos de uso
                        </a>
                        e
                        <a
                            className="text-zinc-300 underline"
                            href="#"
                            target="_blank">
                            políticas de privacidade
                        </a>.
                    </p>
                </div>
                {
                    isGuestsModalOpen && (
                        <InviteGuestsModal
                            emailsToInvite={emailsToInvite}
                            addNewEmailToInvite={addNewEmailToInvite}
                            closeGuestsModal={closeGuestsModal}
                            removeEmailFromInvites={removeEmailFromInvites}
                        />
                    )
                }
                {
                    isConfirmTripModalOPen && (
                        <ConfirmTripModal
                            closeConfirmTripModal={closeConfirmTripModal}
                            createTrip={createTrip}
                        />
                    )
                }
            </div>
        </>
    );
}

export default CreateTripPage;