import React, { FC } from 'react';
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { OverlayPlacement } from '@nextui-org/aria-utils';

interface PopupProps {
    title: string;
    place: OverlayPlacement;
    children: React.ReactNode;
  }

const Popup: FC<PopupProps> = ({ title, children, place }) => {
    return(
    <Popover placement={place} showArrow={true}>
    <PopoverTrigger>
    <Button>{title}</Button>
    </PopoverTrigger>
    <PopoverContent>
    {children}
    </PopoverContent>
    </Popover>
    )
}

export default Popup;