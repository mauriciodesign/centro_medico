var Radiologia = [
    {
        hora: '11:00',
        especialista: 'Ignacio Schulz',
        paciente: 'Francisca Rojas',
        rut: '9.878.782-1',
        prevision: 'Fonasa',
    },
    {
        hora: '11:30',
        especialista: 'Federico Subercaseaux',
        paciente: 'Patricia Estrada',
        rut: '15.345.241-3',
        prevision: 'Isapre',
    },
    {
        hora: '15:00',
        especialista: 'Fernando Wurthz',
        paciente: 'Armando Luna',
        rut: '16.445.345-9',
        prevision: 'Isapre',
    },
    {
        hora: '15:30',
        especialista: 'Ana María Godoy',
        paciente: 'Manuel Godoy',
        rut: '17.666.419-0',
        prevision: 'Fonasa',
    },
    {
        hora: '16:00',
        especialista: 'Patricia Suazo',
        paciente: 'Ramon Ulloa',
        rut: '14.989.389-k',
        prevision: 'Fonasa',
    },
]
var Traumatologia = [
    {
        hora: '8:00',
        especialista: 'María Paz Altuzarra',
        paciente: 'Paula Sánchez',
        rut: '15.554.774-5',
        prevision: 'Fonasa',
    },
    {
        hora: '10:00',
        especialista: 'Raul Araya',
        paciente: 'Angélica Navas',
        rut: '15.444.147-9',
        prevision: 'Isapre',
    },
    {
        hora: '10:30',
        especialista: 'María Arriagada',
        paciente: 'Ana Klapp',
        rut: '17.879.423-9',
        prevision: 'Isapre',
    },
    {
        hora: '11:00',
        especialista: 'Alejandro Badilla',
        paciente: 'Felipe Mardones',
        rut: '1.547.423-6',
        prevision: 'Isapre',
    },
    {
        hora: '11:30',
        especialista: 'Cecilia Budnik',
        paciente: 'Diego Marre',
        rut: '16.554.741-k',
        prevision: 'Fonasa',
    },
    {
        hora: '12:00',
        especialista: 'Arturo Cavagnaro',
        paciente: 'Cecilia Mendez',
        rut: '9.747.535-8',
        prevision: 'Isapre',
    },
    {
        hora: '12:30',
        especialista: 'Andres Kanacri',
        paciente: 'Marcial Suazo',
        rut: '11.254.785-5',
        prevision: 'Isapre',
    },
]

var Dental = [
    {
        hora: '8:30',
        especialista: 'Andrea Zúñiga',
        paciente: 'Marcela Retamal',
        rut: '11.123.425-6',
        prevision: 'isapre',
    },
    {
        hora: '11:00',
        especialista: 'María Paz Zañartu',
        paciente: 'Angel Muñoz',
        rut: '9.878.789-2',
        prevision: 'isapre',
    },
    {
        hora: '11:30',
        especialista: 'Scarlett Witting',
        paciente: 'Mario Pérez',
        rut: '7.998..789-5',
        prevision: 'fonasa',
    },
    {
        hora: '13:00',
        especialista: 'Francisco Von Teuber',
        paciente: 'Karin Fernandez',
        rut: '18.887.662-k',
        prevision: 'fonasa',
    },
    {
        hora: '13:30',
        especialista: 'Eduardo Viñuela',
        paciente: 'Hugo Sanchez',
        rut: '17.665.461-4',
        prevision: 'fonasa',
    },
    {
        hora: '14:00',
        especialista: 'Raquel Villaseca',
        paciente: 'Ana Sepúlveda',
        rut: '14.441.281-0',
        prevision: 'isapre',
    },
]


var longitudR = Radiologia.length;
var longitudT = Traumatologia.length;
var longitudD = Dental.length;

document.getElementById('title').innerHTML = ('Estadisticas centro medico ñuñoa')


document.getElementById('radiologia').innerHTML = '<b>Cantidad de consultas en Radiologia:  </b>' + longitudD;
document.getElementById('traumatologia').innerHTML = '<b>Cantidad de consultas en Traumatologia:  </b>' + longitudT;
document.getElementById('dental').innerHTML = '<b>Cantidad de consultas en Dental:  </b>' + longitudD;


document.getElementById('radiologia_atencion').innerHTML = '<b>Primera atencion: </b>' + Radiologia[0].paciente + ' | ' + Radiologia[0].rut + ' | ' + Radiologia[0].prevision + '</br>' + '<b>Ultima atencion: </b>' + Radiologia[longitudR - 1].paciente + ' | ' + Radiologia[longitudR - 1].rut + ' | ' + Radiologia[longitudR - 1].prevision;


document.getElementById('traumatologia_atencion').innerHTML = '<b>Primera atencion: </b>' + Traumatologia[0].paciente + ' | ' + Traumatologia[0].rut + ' | ' + Traumatologia[0].prevision + '</br>' + '<b>Ultima atencion: </b>' + Traumatologia[longitudT - 1].paciente + ' | ' + Traumatologia[longitudT- 1].rut + ' | ' + Traumatologia[longitudT - 1].prevision;


document.getElementById('dental_atencion').innerHTML = '<b>Primera atencion: </b>' + Dental[0].paciente + ' | ' + Dental[0].rut + ' | ' + Dental[0].prevision + '</br>' + '<b>Ultima atencion: </b>' + Dental[longitudD - 1].paciente + ' | ' + Dental[longitudD - 1].rut + ' | ' + Dental[longitudD - 1].prevision;