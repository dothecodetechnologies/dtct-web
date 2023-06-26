let locationList = [
    { id: 'JKR', name: 'Jamuaon Khanpur' },
    { id: 'KWA', name: 'Khandwa' },
    { id: 'NDP', name: 'Nadpalia' },
    { id: 'TKH', name: 'Thakurahi' },
    { id: 'CRN', name: 'Charouan' },
    { id: 'CTA', name: 'Chhitikiya' },
    { id: 'SPL', name: 'Supapali' },
    { id: 'GPR', name: 'Govapar' },
    { id: 'TRI', name: 'Tirnai' },
    { id: 'RPR', name: 'Rampur' },
    { id: 'MPR', name: 'Malipur' },
    { id: 'NRG', name: 'Naurangia' },
    { id: 'HPR', name: 'Habsapur' },
    { id: 'KTR', name: 'Kaithi Khatimpur' },
    { id: 'TPF', name: 'Tendua' },
    { id: 'SPR', name: 'Saddopur' },
    { id: 'KRN', name: 'Karni' },
    { id: 'HLR', name: 'Holpur' },
    { id: 'TLA', name: 'Telma' },
    { id: 'JPR', name: 'Jaldipur' },
    { id: 'BHL', name: 'Babhnouli' },
    { id: 'AHL', name: 'Ahirouli' },
    { id: 'BRT', name: 'Baraitha' },
    { id: 'MNR', name: 'Molnapur' },
    { id: 'RCL', name: 'Rachhauli' },
    { id: 'RJP', name: 'Rajpur' },
    { id: 'SPA', name: 'Shahpur Afga' },
    { id: 'PSR', name: 'Padsara' },
    { id: 'SJP', name: 'Sujanapur' },
    { id: 'NDH', name: 'Nichuadih' },
    { id: 'PSA', name: 'Parsia' },
    { id: 'BKT', name: 'Bhuara Khunt' },
    { id: 'BJP', name: 'Bhojupur' },
    { id: 'BPR', name: 'Bihraharpur' },
    { id: 'BSP', name: 'Bishunpura' },
    { id: 'CTN', name: 'Chitauni' },
    { id: 'KML', name: 'Kamrouli' },
    { id: 'MDR', name: 'Makhdunpur' },
    { id: 'MSR', name: 'Masuria' },
    { id: 'NNR', name: 'Nanoura' },
    { id: 'PCH', name: 'Pal Chandraha' },
    { id: 'IPR', name: 'Idlispur' },
    { id: 'RBR', name: 'Rupwar Bhagwanpur' },
    { id: 'LHN', name: 'Lahsani' }
];

locationList.sort(function (a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
})

module.exports = locationList;