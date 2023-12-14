$(document).ready(function() {
    $('#form').validate({
        rules: {
            in_imie: 'required',
            in_nazwisko: 'required',
            in_date: 'required',
            in_email: {
                required: true,
                email: true
            },
            in_number: {
                required: true,
                digits: true
            },
            in_wojewodztwo: 'required',
            plec: 'required',
        },
        messages: {
            in_imie: 'Wpisz imię',
            in_nazwisko: 'Wpisz nazwisko',
            in_date: 'Wpisz datę urodzenia',
            in_email: {
                required: 'Wpisz adres email',
                email: 'Źle wpisany adres email'
            },
            in_number: {
                required: 'Wpisz numer telefonu',
            },
            in_wojewodztwo: 'Wybierz województwo',
            plec: 'Wybierz płeć'
        }
    });
});