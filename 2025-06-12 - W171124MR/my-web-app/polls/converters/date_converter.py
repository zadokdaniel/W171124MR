class DateConverter:
    regex = r'\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])'

    def to_python(self, value):
        parts = value.split("-")
        y = int(parts[0])
        m = int(parts[1])
        d = int(parts[2])

        return y, m, d

    def to_url(self, value):
        y, m, d = value
        return f'{y:04}-{m:02}-{d:02}'
