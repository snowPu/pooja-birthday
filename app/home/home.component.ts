import { Component, OnInit } from "@angular/core";
import { messages_28 as messages_28 } from '../assets/messages/messages_28';
import { messages_29 as messages_29 } from '../assets/messages/messages_29';
import { messages_30 as messages_30 } from '../assets/messages/messages_30';

const BIRTHDAY_28 = new Date(2020, 1, 11);
const BIRTHDAY_29 = new Date(2021, 1, 12);
const BIRTHDAY_30 = new Date(2022, 1, 12);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit {

    age: number = 27;
    messages_28;
    messages_29;
    messages_30;
    
    messagePhotoArray_28 = [];
    messagePhotoArray_29 = [];
    messagePhotoArray_30 = [];
    photoDIR = '~/assets/images/';
    tab = 0;

    initialMessageHeight = 60;


    // locations: { city: string, country: string, imageSrc: string }[] = [
    //     { city: "Yarlford", country: "Aldorria", imageSrc: "https://placem.at/places?random=1&w=500&txt=0" },
    //     { city: "Paentmarwy", country: "Bahari", imageSrc: "https://placem.at/places?random=2&w=500&txt=0" },
    //     { city: "Landow", country: "Erewhon", imageSrc: "https://placem.at/places?random=3&w=500&txt=0" },
    //     { city: "Penrith", country: "Gilead", imageSrc: "https://placem.at/places?random=4&w=500&txt=0" },
    //     { city: "Aberystwyth", country: "Mandorra", imageSrc: "https://placem.at/places?random=5&w=500&txt=0" },
    //     { city: "Macclesfield", country: "Nambutu", imageSrc: "https://placem.at/places?random=6&w=500&txt=0" },
    //     { city: "Larnwick", country: "Deltora", imageSrc: "https://placem.at/places?random=77&w=500&txt=0" },
    //     { city: "Snowbush", country: "Islandia", imageSrc: "https://placem.at/places?random=8&w=500&txt=0" },
    //     { city: "Kelna", country: "Norteguay", imageSrc: "https://placem.at/places?random=55&w=500&txt=0" },
    //     { city: "Drumnacanvy", country: "Graznavia", imageSrc: "https://placem.at/places?random=44&w=500&txt=0" },
    //     { city: "Hartlepool", country: "Drasselstein", imageSrc: "https://placem.at/places?random=11&w=500&txt=0" },
    //     { city: "Timeston", country: "Brungaria", imageSrc: "https://placem.at/places?random=33&w=500&txt=0" }
    // ];

    setAge() {
        const today = new Date();
        if (today >= BIRTHDAY_28 && today < BIRTHDAY_29) { this.age = 28; }
        if (today >= BIRTHDAY_29 && today < BIRTHDAY_30) { this.age = 29; }
        if (today >= BIRTHDAY_30) { this.age = 30; }

    }

    setMessages() {
        this.messages_28 = messages_28;
        this.messages_29 = messages_29;
        this.messages_30 = messages_30;
    }

    switchMessageExpanded(item) {
        if (!item.messageExpanded) {
            item.messageHeight = 400;
            item.messageExpanded = true;
        } else {
            item.messageHeight = this.initialMessageHeight;
            item.messageExpanded = false;
        }
    }

    setMessagePhotoArray() {
        for (let message in this.messages_28) {
            if (this.age == 28) {
                this.messagePhotoArray_28.push({
                    name: message,
                    message: this.messages_28[message],
                    photo: this.photoDIR + message + '.jpg',
                    messageHeight: this.initialMessageHeight,
                    messageExpanded: false
                });
            }
            
        }

        for (let message in this.messages_29) {
            if (this.age == 29) {
                this.messagePhotoArray_29.push({
                    name: message,
                    message: this.messages_29[message],
                    photo: this.photoDIR + message + '.jpg',
                    messageHeight: this.initialMessageHeight,
                    messageExpanded: false
                });
            }
        }

        for (let message in this.messages_30) {
            if (this.age == 30) {
                this.messagePhotoArray_30.push({
                    name: message,
                    message: this.messages_30[message],
                    photo: this.photoDIR + message + '.jpg',
                    messageHeight: this.initialMessageHeight,
                    messageExpanded: false
                });
            }
        }
    }

    

    constructor() {
        this.setAge();
        this.setMessages();
        this.setMessagePhotoArray();
    }

    ngOnInit(): void {
    }

    
    tabSelected(args: number) {
        this.tab = args;
        console.log("tab selected: " + args);
    }
}
