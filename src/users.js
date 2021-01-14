const users = [
  {
    'index': 1,
    'gender': 'male',
    'name': {
      'title': 'Mr',
      'first': 'Bendik',
      'last': 'Nordgaard'
    },
    'location': {
      'street': {
        'number': 5868,
        'name': 'Pavels\' gate'
      },
      'city': 'Lyefjell',
      'state': 'Aust-Agder',
      'country': 'Norway',
      'postcode': '5222',
      'coordinates': {
        'latitude': '53.8067',
        'longitude': '-158.7984'
      },
      'timezone': {
        'offset': '-3:00',
        'description': 'Brazil, Buenos Aires, Georgetown'
      }
    },
    'email': 'bendik.nordgaard@example.com',
    'login': {
      'uuid': '2959a712-0322-4cd9-9288-aab0c5bd7653',
      'username': 'lazyleopard683',
      'password': 'bottom',
      'salt': 'bnljX2JL',
      'md5': 'ab67fc868e5c638ad920e09e7e2debf8',
      'sha1': '5b5d8ffec2d18829a27d1a391ab2fbabab5057fe',
      'sha256': 'd606671aa9e61e3f72bed0149ccce2476290560364a84ffaf972dd4dfba5d381'
    },
    'dob': {
      'date': '1980-02-12T19:20:08.573Z',
      'age': 41
    },
    'registered': {
      'date': '2014-06-28T07:22:02.603Z',
      'age': 7
    },
    'phone': '73784432',
    'cell': '94659875',
    'id': {
      'name': 'FN',
      'value': '12028032992'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/0.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/0.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/0.jpg'
    },
    'nat': 'NO'
  },
  {
    'index': 2,
    'gender': 'male',
    'name': {
      'title': 'Mr',
      'first': 'Kenan',
      'last': 'Hov'
    },
    'location': {
      'street': {
        'number': 8493,
        'name': 'Fossefaret'
      },
      'city': 'Brattvåg',
      'state': 'Nord-Trøndelag',
      'country': 'Norway',
      'postcode': '6502',
      'coordinates': {
        'latitude': '52.1018',
        'longitude': '-177.4534'
      },
      'timezone': {
        'offset': '-2:00',
        'description': 'Mid-Atlantic'
      }
    },
    'email': 'kenan.hov@example.com',
    'login': {
      'uuid': '756d317d-bbe9-485e-99aa-a5b0616d9413',
      'username': 'redostrich706',
      'password': 'malone',
      'salt': 'RR6LIv3h',
      'md5': '0720ea7bdb087e92a223c3a9d3a90977',
      'sha1': '8a51f40d02c7c497cf8a8de93a6f9b1a41b7c799',
      'sha256': 'ef9a6ca28e424ae51a06b6da859ed1e99d6fa9660bd6f3ca96dd4c8f5ef32dbf'
    },
    'dob': {
      'date': '1963-06-30T14:18:15.279Z',
      'age': 58
    },
    'registered': {
      'date': '2014-12-07T14:01:24.695Z',
      'age': 7
    },
    'phone': '50485212',
    'cell': '44891050',
    'id': {
      'name': 'FN',
      'value': '30066321157'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/1.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/1.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    },
    'nat': 'NO'
  },
  {
    'index': 3,
    'gender': 'male',
    'name': {
      'title': 'Mr',
      'first': 'Patrick',
      'last': 'Williams'
    },
    'location': {
      'street': {
        'number': 3674,
        'name': 'Main Street East'
      },
      'city': 'Dunedin',
      'state': 'Waikato',
      'country': 'New Zealand',
      'postcode': 20848,
      'coordinates': {
        'latitude': '62.8812',
        'longitude': '-112.3566'
      },
      'timezone': {
        'offset': '0:00',
        'description': 'Western Europe Time, London, Lisbon, Casablanca'
      }
    },
    'email': 'patrick.williams@example.com',
    'login': {
      'uuid': 'de7572d1-ee53-4325-b88e-b05513a1da8d',
      'username': 'orangewolf738',
      'password': 'kirk',
      'salt': '55tnniuS',
      'md5': '6a211235dc233594a474fa2774226d54',
      'sha1': '558d298604334643b8741aea1fa2aac21881a196',
      'sha256': '6d61a94535058969c916f283d31b07bc2b2adf0adfa11b892c7b3b1d1dd6b714'
    },
    'dob': {
      'date': '1945-01-09T00:32:57.775Z',
      'age': 76
    },
    'registered': {
      'date': '2008-06-06T21:40:49.587Z',
      'age': 13
    },
    'phone': '(126)-086-5863',
    'cell': '(265)-110-9099',
    'id': {
      'name': '',
      'value': null
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/34.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/34.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/34.jpg'
    },
    'nat': 'NZ'
  },
  {
    'index': 4,
    'gender': 'male',
    'name': {
      'title': 'Mr',
      'first': 'اميرحسين',
      'last': 'نجاتی'
    },
    'location': {
      'street': {
        'number': 9464,
        'name': 'میدان 15خرداد'
      },
      'city': 'اهواز',
      'state': 'آذربایجان غربی',
      'country': 'Iran',
      'postcode': 22550,
      'coordinates': {
        'latitude': '36.7264',
        'longitude': '-154.0399'
      },
      'timezone': {
        'offset': '+1:00',
        'description': 'Brussels, Copenhagen, Madrid, Paris'
      }
    },
    'email': 'myrhsyn.njty@example.com',
    'login': {
      'uuid': '2a7fa202-03b2-402d-a487-5f5eba793d3a',
      'username': 'orangeladybug387',
      'password': 'cooter',
      'salt': 'dnRjbj2P',
      'md5': '6c6ce9fcd9ed8c05d8c2168f9b432651',
      'sha1': 'c745a3699198bc3ea0db651929457ecbebff157a',
      'sha256': '4f74e97c644205c22ec9620594bcca15230327d1839fc5e23a5f5c628e509cff'
    },
    'dob': {
      'date': '1995-10-21T23:30:34.089Z',
      'age': 26
    },
    'registered': {
      'date': '2008-01-06T15:06:36.307Z',
      'age': 13
    },
    'phone': '076-45282666',
    'cell': '0956-662-0478',
    'id': {
      'name': '',
      'value': null
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/87.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/87.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/87.jpg'
    },
    'nat': 'IR'
  },
  {
    'index': 5,
    'gender': 'female',
    'name': {
      'title': 'Miss',
      'first': 'Alison',
      'last': 'Watts'
    },
    'location': {
      'street': {
        'number': 8347,
        'name': 'Church Street'
      },
      'city': 'Salford',
      'state': 'Clwyd',
      'country': 'United Kingdom',
      'postcode': 'UA34 2EQ',
      'coordinates': {
        'latitude': '6.3786',
        'longitude': '77.8669'
      },
      'timezone': {
        'offset': '-3:00',
        'description': 'Brazil, Buenos Aires, Georgetown'
      }
    },
    'email': 'alison.watts@example.com',
    'login': {
      'uuid': '0f05d2b2-22d7-4ecc-a020-10378a6cfde3',
      'username': 'beautifulbutterfly112',
      'password': 'bulldogs',
      'salt': 'j1C5VVxd',
      'md5': '44f94ae9261cfff57a16504a924bb9ae',
      'sha1': 'c8cfa5d90c893bf68a4d8455ab319566f22b8626',
      'sha256': '0d9b69551fc4d2ef5d437907c06b723b542f243a87c3c69acb5bcad935a597c1'
    },
    'dob': {
      'date': '1956-11-10T11:12:16.946Z',
      'age': 65
    },
    'registered': {
      'date': '2009-12-23T04:47:27.124Z',
      'age': 12
    },
    'phone': '019467 25470',
    'cell': '0798-749-530',
    'id': {
      'name': 'NINO',
      'value': 'GL 00 93 44 W'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/women/53.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/women/53.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/53.jpg'
    },
    'nat': 'GB'
  },
  {
    'index': 6,
    'gender': 'male',
    'name': {
      'title': 'Mr',
      'first': 'Mason',
      'last': 'Castillo'
    },
    'location': {
      'street': {
        'number': 3600,
        'name': 'Walnut Hill Ln'
      },
      'city': 'Kalgoorlie',
      'state': 'Tasmania',
      'country': 'Australia',
      'postcode': 384,
      'coordinates': {
        'latitude': '-84.1412',
        'longitude': '-12.6473'
      },
      'timezone': {
        'offset': '-6:00',
        'description': 'Central Time (US & Canada), Mexico City'
      }
    },
    'email': 'mason.castillo@example.com',
    'login': {
      'uuid': 'a235e7ac-7f44-49e2-836a-71252199d43d',
      'username': 'happyostrich545',
      'password': 'chloe1',
      'salt': 'E9rpL5kd',
      'md5': '02ad17120b58cc0b28b95c65c9143fa5',
      'sha1': 'ef3de2d1cfffe785dc0401e66fea76963384501b',
      'sha256': '11384c404d0f7f0f13d978fda43d8ef6e9bb4166018bceee2b1ac485067874a6'
    },
    'dob': {
      'date': '1950-08-31T04:11:00.954Z',
      'age': 71
    },
    'registered': {
      'date': '2004-09-03T02:03:38.237Z',
      'age': 17
    },
    'phone': '01-0568-2181',
    'cell': '0494-767-795',
    'id': {
      'name': 'TFN',
      'value': '427629688'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/32.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/32.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/32.jpg'
    },
    'nat': 'AU'
  },
  {
    'index': 7,
    'gender': 'female',
    'name': {
      'title': 'Ms',
      'first': 'Josefine',
      'last': 'Rasmussen'
    },
    'location': {
      'street': {
        'number': 439,
        'name': 'Thorsgade'
      },
      'city': 'Gjerlev',
      'state': 'Hovedstaden',
      'country': 'Denmark',
      'postcode': 83459,
      'coordinates': {
        'latitude': '-33.5210',
        'longitude': '29.8242'
      },
      'timezone': {
        'offset': '+4:30',
        'description': 'Kabul'
      }
    },
    'email': 'josefine.rasmussen@example.com',
    'login': {
      'uuid': '6daa0d35-d7d3-40ee-8697-945ecfb66892',
      'username': 'heavymeercat368',
      'password': 'merlot',
      'salt': 'CZnd45rA',
      'md5': 'e29fae9c9f2884e3a074c49cffc94cd7',
      'sha1': '090defad8b841f76e0df32bd670e83194b4bee82',
      'sha256': '02f40bf8f2dafe4b24fd3a1649c1fccae567218b45030aefcb4fff40200b494e'
    },
    'dob': {
      'date': '1964-11-03T02:50:21.665Z',
      'age': 57
    },
    'registered': {
      'date': '2018-07-30T09:26:25.238Z',
      'age': 3
    },
    'phone': '97435518',
    'cell': '88791901',
    'id': {
      'name': 'CPR',
      'value': '031164-4999'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/women/73.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/women/73.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/73.jpg'
    },
    'nat': 'DK'
  },
  {
    'index': 9,
    'gender': 'female',
    'name': {
      'title': 'Ms',
      'first': 'Josefine',
      'last': 'Rasmussen'
    },
    'location': {
      'street': {
        'number': 439,
        'name': 'Thorsgade'
      },
      'city': 'Gjerlev',
      'state': 'Hovedstaden',
      'country': 'Denmark',
      'postcode': 83459,
      'coordinates': {
        'latitude': '-33.5210',
        'longitude': '29.8242'
      },
      'timezone': {
        'offset': '+4:30',
        'description': 'Kabul'
      }
    },
    'email': 'josefine.rasmussen@example.com',
    'login': {
      'uuid': '6daa0d35-d7d3-40ee-8697-945ecfb66892',
      'username': 'heavymeercat368',
      'password': 'merlot',
      'salt': 'CZnd45rA',
      'md5': 'e29fae9c9f2884e3a074c49cffc94cd7',
      'sha1': '090defad8b841f76e0df32bd670e83194b4bee82',
      'sha256': '02f40bf8f2dafe4b24fd3a1649c1fccae567218b45030aefcb4fff40200b494e'
    },
    'dob': {
      'date': '1964-11-03T02:50:21.665Z',
      'age': 57
    },
    'registered': {
      'date': '2018-07-30T09:26:25.238Z',
      'age': 3
    },
    'phone': '97435518',
    'cell': '88791901',
    'id': {
      'name': 'CPR',
      'value': '031164-4999'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/women/73.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/women/73.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/73.jpg'
    },
    'nat': 'DK'
  },
  {
    'index': 10,
    'gender': 'female',
    'name': {
      'title': 'Mademoiselle',
      'first': 'Raymonde',
      'last': 'Brun'
    },
    'location': {
      'street': {
        'number': 5701,
        'name': 'Rue de L\'Abbé-Gillet'
      },
      'city': 'Breil/Brigels',
      'state': 'Ticino',
      'country': 'Switzerland',
      'postcode': 8323,
      'coordinates': {
        'latitude': '-54.5490',
        'longitude': '104.3219'
      },
      'timezone': {
        'offset': '+9:00',
        'description': 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk'
      }
    },
    'email': 'raymonde.brun@example.com',
    'login': {
      'uuid': 'c12d981c-5d65-47bb-b2cd-8673d5d7305b',
      'username': 'ticklishleopard464',
      'password': 'sealteam',
      'salt': 'ZzuDRSmi',
      'md5': 'a7292e74bfa0646e994d759f462f20fe',
      'sha1': '3229ee482854461c94cd3d6411b2df9854cfab86',
      'sha256': 'd0e788d32cefd4031f895d5a1f6481d3216e7c33bc701a5ab83ad0087b0a3a16'
    },
    'dob': {
      'date': '1968-11-08T22:34:37.653Z',
      'age': 53
    },
    'registered': {
      'date': '2005-10-03T13:24:43.251Z',
      'age': 16
    },
    'phone': '077 203 68 31',
    'cell': '077 191 43 70',
    'id': {
      'name': 'AVS',
      'value': '756.5036.6945.11'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/women/80.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/women/80.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/80.jpg'
    },
    'nat': 'CH'
  },
  {
    'index': 11,
    'gender': 'female',
    'name': {
      'title': 'Miss',
      'first': 'Camille',
      'last': 'Menard'
    },
    'location': {
      'street': {
        'number': 4003,
        'name': 'Rue Dubois'
      },
      'city': 'Lille',
      'state': 'Moselle',
      'country': 'France',
      'postcode': 57992,
      'coordinates': {
        'latitude': '2.6656',
        'longitude': '95.8108'
      },
      'timezone': {
        'offset': '-5:00',
        'description': 'Eastern Time (US & Canada), Bogota, Lima'
      }
    },
    'email': 'camille.menard@example.com',
    'login': {
      'uuid': '2a146d6b-87e5-494d-a0e5-41a98d0e809d',
      'username': 'goldenelephant186',
      'password': 'swordfis',
      'salt': 'E4uKr2xc',
      'md5': 'a9af8cc0c29403fd367bb303591fd42a',
      'sha1': '43fc749c5fe2f95412b8eb82682e704c2396d391',
      'sha256': '225b3cf961c8c5afacee56411a6634115efae6942f95ffd75318cb7fbee83005'
    },
    'dob': {
      'date': '1980-01-21T11:00:44.731Z',
      'age': 41
    },
    'registered': {
      'date': '2012-11-07T13:02:53.636Z',
      'age': 9
    },
    'phone': '05-08-50-58-98',
    'cell': '06-64-28-11-30',
    'id': {
      'name': 'INSEE',
      'value': '2NNaN42289483 96'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/women/53.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/women/53.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/53.jpg'
    },
    'nat': 'FR'
  },
  {
    'index': 12,
    'gender': 'female',
    'name': {
      'title': 'Miss',
      'first': 'Florence',
      'last': 'Green'
    },
    'location': {
      'street': {
        'number': 6007,
        'name': 'King Street'
      },
      'city': 'Canterbury',
      'state': 'Worcestershire',
      'country': 'United Kingdom',
      'postcode': 'A3Q 3PH',
      'coordinates': {
        'latitude': '6.9520',
        'longitude': '104.9765'
      },
      'timezone': {
        'offset': '-10:00',
        'description': 'Hawaii'
      }
    },
    'email': 'florence.green@example.com',
    'login': {
      'uuid': '6521942f-c801-4815-8741-6ab41acc0f53',
      'username': 'beautifulkoala678',
      'password': 'domain',
      'salt': 'FceFhvqB',
      'md5': '8aed9d6ae2919e68c8b1c1d3c666577a',
      'sha1': '341f5bf866a7ebb73ce7039a39c1871175771a7a',
      'sha256': 'ab5cc8f7659339cc93bc67b3707fda09df0058db1b57afa4cdd3a170c3f9fd05'
    },
    'dob': {
      'date': '1985-01-06T18:30:21.053Z',
      'age': 36
    },
    'registered': {
      'date': '2007-01-10T19:23:06.756Z',
      'age': 14
    },
    'phone': '019467 09376',
    'cell': '0702-887-169',
    'id': {
      'name': 'NINO',
      'value': 'HK 72 90 73 U'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/women/10.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/women/10.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/10.jpg'
    },
    'nat': 'GB'
  },
  {
    'index': 13,
    'gender': 'female',
    'name': {
      'title': 'Mrs',
      'first': 'Ruby',
      'last': 'Cunningham'
    },
    'location': {
      'street': {
        'number': 9961,
        'name': 'Plum St'
      },
      'city': 'Warrnambool',
      'state': 'Western Australia',
      'country': 'Australia',
      'postcode': 1570,
      'coordinates': {
        'latitude': '-86.8437',
        'longitude': '57.5343'
      },
      'timezone': {
        'offset': '-8:00',
        'description': 'Pacific Time (US & Canada)'
      }
    },
    'email': 'ruby.cunningham@example.com',
    'login': {
      'uuid': 'd292faff-a584-4495-b4d8-2a31c151bb97',
      'username': 'lazydog698',
      'password': 'slammer',
      'salt': 'uIrtKu8t',
      'md5': '972e33d901d18b25ccd33ec396c09e9a',
      'sha1': 'e6c3cc464b8f29808dc78450991d79a4617384f7',
      'sha256': 'ae30fe3b478172ee27bdd40ac20c1e6a5c3feee4890350bad235005a4662a393'
    },
    'dob': {
      'date': '1957-12-13T16:08:52.247Z',
      'age': 64
    },
    'registered': {
      'date': '2003-08-28T12:25:47.065Z',
      'age': 18
    },
    'phone': '00-3177-5459',
    'cell': '0439-959-297',
    'id': {
      'name': 'TFN',
      'value': '506710028'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/women/74.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/women/74.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/74.jpg'
    },
    'nat': 'AU'
  },
  {
    'index': 14,
    'gender': 'male',
    'name': {
      'title': 'Mr',
      'first': 'علیرضا',
      'last': 'نكو نظر'
    },
    'location': {
      'street': {
        'number': 6500,
        'name': 'میرزای شیرازی'
      },
      'city': 'بیرجند',
      'state': 'کردستان',
      'country': 'Iran',
      'postcode': 36096,
      'coordinates': {
        'latitude': '36.0229',
        'longitude': '-148.2302'
      },
      'timezone': {
        'offset': '+8:00',
        'description': 'Beijing, Perth, Singapore, Hong Kong'
      }
    },
    'email': 'aalyrd.nkwnzr@example.com',
    'login': {
      'uuid': 'abdac4c4-7106-475c-ad85-1f1ee929291d',
      'username': 'lazyfrog161',
      'password': 'soulmate',
      'salt': 'EgcyBvU6',
      'md5': '0bf0f389e29fd727aedf17131013228a',
      'sha1': '14ff110586b0916048f433a57bb23c877b367a2e',
      'sha256': 'c14546c3ad4aeefe9dd725633b452c5c418432b7db86b73202b0ba59c7ec264d'
    },
    'dob': {
      'date': '1996-04-12T10:14:10.566Z',
      'age': 25
    },
    'registered': {
      'date': '2003-07-19T00:54:11.079Z',
      'age': 18
    },
    'phone': '085-15150814',
    'cell': '0929-530-5700',
    'id': {
      'name': '',
      'value': null
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/89.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/89.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/89.jpg'
    },
    'nat': 'IR'
  },
  {
    'index': 15,
    'gender': 'female',
    'name': {
      'title': 'Mrs',
      'first': 'Peppi',
      'last': 'Hakola'
    },
    'location': {
      'street': {
        'number': 6403,
        'name': 'Pirkankatu'
      },
      'city': 'Toivakka',
      'state': 'Lapland',
      'country': 'Finland',
      'postcode': 11400,
      'coordinates': {
        'latitude': '-12.5904',
        'longitude': '172.8923'
      },
      'timezone': {
        'offset': '+4:30',
        'description': 'Kabul'
      }
    },
    'email': 'peppi.hakola@example.com',
    'login': {
      'uuid': 'b16aa8e4-03ff-4f39-902b-71059e96a202',
      'username': 'sadkoala190',
      'password': 'boomer1',
      'salt': 'l099oIZb',
      'md5': '717c02736ba89bf88042a860c8953fe5',
      'sha1': '31dc8322272877893069ed8fc60cecff3d2ac4e3',
      'sha256': 'c48451c063fb3d747eeec3d3230514cf52b14b97223f35489a92dfb77a44b6eb'
    },
    'dob': {
      'date': '1944-11-20T09:41:34.600Z',
      'age': 77
    },
    'registered': {
      'date': '2007-12-01T22:26:55.149Z',
      'age': 14
    },
    'phone': '09-546-101',
    'cell': '044-201-89-69',
    'id': {
      'name': 'HETU',
      'value': 'NaNNA810undefined'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/women/60.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/women/60.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/60.jpg'
    },
    'nat': 'FI'
  },
  {
    'index': 16,
    'gender': 'female',
    'name': {
      'title': 'Ms',
      'first': 'Caroline',
      'last': 'Shelton'
    },
    'location': {
      'street': {
        'number': 1990,
        'name': 'Denny Street'
      },
      'city': 'Waterford',
      'state': 'Carlow',
      'country': 'Ireland',
      'postcode': 50920,
      'coordinates': {
        'latitude': '17.6977',
        'longitude': '129.5722'
      },
      'timezone': {
        'offset': '-3:30',
        'description': 'Newfoundland'
      }
    },
    'email': 'caroline.shelton@example.com',
    'login': {
      'uuid': '3db432f0-7495-4c34-9ede-e4a5bc8d935e',
      'username': 'tinywolf350',
      'password': 'suan',
      'salt': 'qMuWnr14',
      'md5': '5bb540af3b7f1fe1bdd1d4b4d03b928a',
      'sha1': 'f08db3f9d1833665e1d9afa752ee03ec1e83e9a8',
      'sha256': '1ca7e895dd3642628f2c10066aa16147f90132e83256364440de5618175da557'
    },
    'dob': {
      'date': '1979-08-31T15:42:42.426Z',
      'age': 42
    },
    'registered': {
      'date': '2008-01-04T02:51:22.363Z',
      'age': 13
    },
    'phone': '061-585-1394',
    'cell': '081-115-8560',
    'id': {
      'name': 'PPS',
      'value': '1048951T'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/women/72.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/women/72.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/72.jpg'
    },
    'nat': 'IE'
  }, {
    'index': 17,
    'gender': 'male',
    'name': {
      'title': 'Mr',
      'first': 'Jaque',
      'last': 'da Paz'
    },
    'location': {
      'street': {
        'number': 906,
        'name': 'Beco dos Namorados'
      },
      'city': 'Santos',
      'state': 'Mato Grosso do Sul',
      'country': 'Brazil',
      'postcode': 44387,
      'coordinates': {
        'latitude': '-72.8191',
        'longitude': '-78.3945'
      },
      'timezone': {
        'offset': '-7:00',
        'description': 'Mountain Time (US & Canada)'
      }
    },
    'email': 'jaque.dapaz@example.com',
    'login': {
      'uuid': '84211c66-55af-431c-aba2-0d7d760d0732',
      'username': 'purplecat142',
      'password': 'redline',
      'salt': 'wuP9ofVy',
      'md5': '73483c6501617f9d5e9de68c3ebfa783',
      'sha1': '82c48d15d2676c1bc2b63919d9b661c67f0511ce',
      'sha256': '67e587e23b1c000a9a384305de89be3ea4dd9698a91841ca1ded69ad58a308c3'
    },
    'dob': {
      'date': '1991-10-08T14:16:33.823Z',
      'age': 30
    },
    'registered': {
      'date': '2010-06-24T11:58:43.585Z',
      'age': 11
    },
    'phone': '(43) 0804-2199',
    'cell': '(34) 8783-6056',
    'id': {
      'name': '',
      'value': null
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/men/87.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/men/87.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/87.jpg'
    },
    'nat': 'BR'
  },
  {
    'index': 18,
    'gender': 'female',
    'name': {
      'title': 'Miss',
      'first': 'Rose',
      'last': 'Jacobs'
    },
    'location': {
      'street': {
        'number': 1809,
        'name': 'Albert Road'
      },
      'city': 'Kinsale',
      'state': 'Fingal',
      'country': 'Ireland',
      'postcode': 30003,
      'coordinates': {
        'latitude': '24.7947',
        'longitude': '146.5372'
      },
      'timezone': {
        'offset': '+6:00',
        'description': 'Almaty, Dhaka, Colombo'
      }
    },
    'email': 'rose.jacobs@example.com',
    'login': {
      'uuid': 'c71c2084-3edd-4248-8192-7b044dc471c1',
      'username': 'blackladybug759',
      'password': 'magneto',
      'salt': '431jrFWf',
      'md5': '025f424fb049bcba751d0b0295c72ce9',
      'sha1': '6e14746704a3d81209374d90950d71de20974c40',
      'sha256': 'cd9a9f1f10dfa045fcb816b33e7a51eb228a30524fff3047eac5f007e5dda8b5'
    },
    'dob': {
      'date': '1946-11-21T19:28:28.681Z',
      'age': 75
    },
    'registered': {
      'date': '2007-08-22T01:37:19.662Z',
      'age': 14
    },
    'phone': '061-824-0711',
    'cell': '081-948-0330',
    'id': {
      'name': 'PPS',
      'value': '8871386T'
    },
    'picture': {
      'large': 'https://randomuser.me/api/portraits/women/26.jpg',
      'medium': 'https://randomuser.me/api/portraits/med/women/26.jpg',
      'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/26.jpg'
    },
    'nat': 'IE'
  }
];

export default users;