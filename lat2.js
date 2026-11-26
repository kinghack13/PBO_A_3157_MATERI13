const printer = {
    cetak(data) {
        console.log(`${this.nama} mencetak ${data}.`);
    }
};

const scanner = {
    pindai(data) {
        console.log(`${this.nama} memindai ${data}.`);
    }
};

const fax = {
    kirimFax(data) {
        console.log(`${this.nama} mengirim fax ${data}.`);
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}

class MesinMultifungsi {
    constructor(nama) {
        this.nama = nama;
    }
}

class PrinterSederhana {
    constructor(nama) {
        this.nama = nama;
    }
}
applyCapabilities(MesinMultifungsi, printer, scanner, fax);
applyCapabilities(PrinterSederhana, printer);

function jalankanTugas(perangkat, tugas, data) {
    if (typeof perangkat[tugas] !== "function") {
        throw new Error(`${perangkat.nama} tidak mendukung ${tugas}()`);
    }
    perangkat[tugas](data);
}

console.log("=== OFFICE DEVICE TASK ROUTER ===");

const mesin = new MesinMultifungsi("Mesin_3157");
const printerBiasa = new PrinterSederhana("Printer_3157");

try {
    jalankanTugas(mesin, "cetak", "Laporan.pdf");
} catch (error) {
    console.log("[GAGAL] " + error.message);
}

try {
    jalankanTugas(mesin, "pindai", "KTP.jpg");
} catch (error) {
    console.log("[GAGAL] " + error.message);
}

try {
    jalankanTugas(printerBiasa, "cetak", "Laporan.pdf");
} catch (error) {
    console.log("[GAGAL] " + error.message);
}

try {
    jalankanTugas(printerBiasa, "pindai", "KTP.jpg");
} catch (error) {
    console.log("[GAGAL] " + error.message);
}

try {
    jalankanTugas(printerBiasa, "kirimFax", "Surat.docx");
} catch (error) {
    console.log("[GAGAL] " + error.message);
}