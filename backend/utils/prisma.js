// STRICT MODE
// ===========================================================================
"use strict";


// LIBS
// ===========================================================================
import { PrismaClient } from "@prisma/client";

// INIT
// ===========================================================================
export const prismaClient = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query"
        },
        {
            emit: "event",
            level: "error"
        },
        {
            emit: "event",
            level: "info"
        },
        {
            emit: "event",
            level: "warn"
        }
    ]
});