class TimeConverter:
    regex = r'[0-2]\d:[0-5]\d'

    def to_python(self, value):
        parts = value.split(":")
        h = int(parts[0])
        m = int(parts[1])

        return h, m

    def to_url(self, value):
        h, m = value
        return f'{h:02}:{m:02}'
