'use client';
import { Card } from '@/components/ui/card';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { PrivateResearchProps, PublicFundingResearchProps } from '../(types)/ResearchProps';
import Image from 'next/image';

export default function ResearchCard({
  researchInfo,
}: {
  researchInfo: PublicFundingResearchProps | PrivateResearchProps;
}) {
  const cardSize = {
    height: '300px',
    width: '300px',
  };

  const ResearchDialogDataRow = ({ title, value }: { title: string; value: string | number }) => (
    <div className="flex w-100 my-2">
      <h6 className=" font-semibold whitespace-nowrap min-w-[120px]">{title}</h6>
      <div className="pl-2">{value}</div>
    </div>
  );

  return (
    <>
      <Card
        className="p-4 flex flex-col justify-center align-middle relative hover:bg-slate-100 transition-all ease-in md:h-[300px] max-h-[300px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${researchInfo.backgroundImage})`, // fix this
          scale: 1,
        }}
      >
        <div className="text-center py-8 md:py-2 xs:text-sm md:text-2xl">{researchInfo.shortTitle}</div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="absolute bottom-[46px] right-[12px] h-1">
              <PlusCircle />
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[100vh] mt-4 overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="mb-2 mr-5">{researchInfo.title}</DialogTitle>
              <Separator />
              <DialogDescription className="pt-2">
                {'fundedBy' in researchInfo && (
                  <ResearchDialogDataRow title="Funded by:" value={researchInfo.fundedBy} />
                )}
                <ResearchDialogDataRow title="Client:" value={researchInfo.client} />
                <ResearchDialogDataRow title="Research period:" value={researchInfo.researchPeriod} />
                <ResearchDialogDataRow title="Position:" value={researchInfo.position} />
                <ResearchDialogDataRow title="Participants:" value={researchInfo.participants.join(', ')} />
                {researchInfo.developedAt && (
                  <ResearchDialogDataRow title="Developed at:" value={researchInfo.developedAt} />
                )}
                {researchInfo.goalsAndTasks && (
                  <ResearchDialogDataRow title="Goals and tasks:" value={researchInfo.goalsAndTasks} />
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Card>
    </>
  );
}
