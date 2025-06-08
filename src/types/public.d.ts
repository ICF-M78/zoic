interface Settings {
    quote: string;
    quoteColor: string;
    fontSize: number;
    fontFamily: string;
    backgroundColor: string;
    letterSpacing: number;
    textPosition: {
        x: number;
        y: number;
    };
}

interface Quote {
    id?: number;
    createdBy?: string;
    //
    quote: string;
    createdAt: string;
    isActive: boolean;
}
