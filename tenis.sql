use master;
go
drop database if exists teniski_treninzi
go
create database teniski_treninzi;
go
use teniski_treninzi;

create table Treneri(
	Sifra int not null primary key identity(1,1),
	Ime varchar(50) not null,
	Prezime varchar(50) not null,
);

create table Grupe(
	Sifra int not null primary key identity(1,1),
	Naziv varchar(50) not null,
	Trener int not null foreign key references Treneri(Sifra),
);

create table Polaznici	(
	Sifra int not null primary key identity(1,1),
	Ime varchar(50) not null,
	Prezime varchar(50) not null,
	Grupa int not null foreign key references Grupe(Sifra)
);

create table Treninzi (
	Sifra int not null primary key identity(1,1),
	Vrijeme datetime not null,
	Grupa int not null foreign key references Grupe(Sifra)
);

insert into Treneri (Ime, Prezime) values ('Oleg', 'Gojtan');

select * from Treneri;

insert into Grupe (Naziv, Trener) values ('Grupa1', 1);

select * from Grupe;

insert into Polaznici (Ime, Prezime, Grupa) values ('Marko', 'Marki?', 1);

select * from Polaznici;

insert into Treninzi (Vrijeme, Grupa) values ('2024-09-09 17:30', 1);

select * from Treninzi;