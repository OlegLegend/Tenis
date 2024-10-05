
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

insert into Treneri (Ime, Prezime) 
values ('Oleg', 'Gojtan'),
('Marjan', 'Zik'),
('Marija', 'Fat');
