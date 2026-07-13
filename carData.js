// Car manufacturer data with high-quality embedded SVG logos
// These are custom-designed SVG logos that will always work reliably

const CAR_DATA = {
    'toyota': {
        name: 'Toyota',
        country: 'Japan',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTgiIGZpbGw9IiNFRDFDMjQiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGVsbGlwc2UgY3g9IjYwIiBjeT0iNDUiIHJ4PSIyNSIgcnk9IjE1IiBmaWxsPSIjRkZGRkZGIi8+PGVsbGlwc2UgY3g9IjQ1IiBjeT0iNzAiIHJ4PSIxNSIgcnk9IjEwIiBmaWxsPSIjRkZGRkZGIi8+PGVsbGlwc2UgY3g9Ijc1IiBjeT0iNzAiIHJ4PSIxNSIgcnk9IjEwIiBmaWxsPSIjRkZGRkZGIi8+PHRleHQgeD0iNjAiIHk9Ijk1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UT1lPVEE8L3RleHQ+PC9zdmc+'
    },
    'bmw': {
        name: 'BMW',
        country: 'Germany', 
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTgiIGZpbGw9IiMwMDc3RDAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTYwIDEwTDYwIDExME02MCA2MEwxMTAgNjBNNjAgNjBMMTAgNjAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTTMwIDMwTDkwIDMwTDkwIDkwTDMwIDkwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSI2MCIgeT0iNjciIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJNVzwvdGV4dD48L3N2Zz4='
    },
    'mercedes': {
        name: 'Mercedes-Benz',
        country: 'Germany',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTgiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTYwIDIwTDQwIDgwTDgwIDgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSI0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSI2MCIgeT0iMTA1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NRVJDRURFUzwvdGV4dD48L3N2Zz4='
    },
    'ford': {
        name: 'Ford',
        country: 'United States',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGVsbGlwc2UgY3g9IjYwIiBjeT0iNjAiIHJ4PSI1OCIgcnk9IjM1IiBmaWxsPSIjMDA2NEE3IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNCIvPjx0ZXh0IHg9IjYwIiB5PSI2OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Rm9yZDwvdGV4dD48L3N2Zz4='
    },
    'honda': {
        name: 'Honda',
        country: 'Japan',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjExNiIgaGVpZ2h0PSI3MCIgeD0iMiIgeT0iMjUiIGZpbGw9IiNGRjAwMDAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0IiByeD0iMTAiLz48dGV4dCB4PSI2MCIgeT0iNjgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhPTkRBPC90ZXh0Pjwvc3ZnPg=='
    },
    'volkswagen': {
        name: 'Volkswagen',
        country: 'Germany',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTgiIGZpbGw9IiMwMEE2RkIiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHRleHQgeD0iNjAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WPC90ZXh0Pjx0ZXh0IHg9IjYwIiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VzwvdGV4dD48L3N2Zz4='
    },
    'audi': {
        name: 'Audi',
        country: 'Germany',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjExNiIgaGVpZ2h0PSIxMTYiIHg9IjIiIHk9IjIiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI0IiByeD0iMTAiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjYwIiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjYwIiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSI3MCIgY3k9IjYwIiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSI5MCIgY3k9IjYwIiByPSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMiLz48dGV4dCB4PSI2MCIgeT0iOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFVREk8L3RleHQ+PC9zdmc+'
    },
    'nissan': {
        name: 'Nissan',
        country: 'Japan',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTgiIGZpbGw9IiNDMzAwMkYiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGVsbGlwc2UgY3g9IjYwIiBjeT0iNjAiIHJ4PSI0MCIgcnk9IjI1IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMyIvPjx0ZXh0IHg9IjYwIiB5PSI2OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TklTU0FOPC90ZXh0Pjwvc3ZnPg=='
    },
    'ferrari': {
        name: 'Ferrari',
        country: 'Italy',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlnb24gcG9pbnRzPSI2MCwyMCA5MCw0MCA5MCw4MCAzMCw4MCAzMCw0MCIgZmlsbD0iI0ZGRDcwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMzAiIHg9IjUwIiB5PSI0NSIgZmlsbD0iI0ZGMDAwMCIvPjx0ZXh0IHg9IjYwIiB5PSI5NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RkVSUkFSSTwvdGV4dD48L3N2Zz4='
    },
    'lamborghini': {
        name: 'Lamborghini',
        country: 'Italy',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlnb24gcG9pbnRzPSI2MCwxNSA5NSw0MCA5NSw4NSAyNSw4NSAyNSw0MCIgZmlsbD0iI0ZGRDcwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJNNDUgNDBMNzUgNDBNNDUgNTVMNzUgNTVNNDUgNzBMNzUgNzAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNjAiIHk9IjEwNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TEFNQk9SR0hJTkk8L3RleHQ+PC9zdmc+'
    }
,
    'porsche': {
        name: 'Porsche',
        country: 'Germany',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjExNiIgaGVpZ2h0PSI4MCIgeD0iMiIgeT0iMjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI0IiByeD0iMTAiLz48dGV4dCB4PSI2MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBPUlNDSEU8L3RleHQ+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB4PSI0MCIgeT0iNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRDcwMCIgc3Ryb2tlLXdpZHRoPSIzIiByeD0iNSIvPjwvc3ZnPg=='
    },
    'jaguar': {
        name: 'Jaguar',
        country: 'United Kingdom',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGVsbGlwc2UgY3g9IjYwIiBjeT0iNjAiIHJ4PSI1OCIgcnk9IjQwIiBmaWxsPSIjMDA1MDQxIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik0zMCA2MEw5MCA2ME01MCA0MEw3MCA0ME01MCA4MEw3MCA4MCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiLz48dGV4dCB4PSI2MCIgeT0iNjgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkpBR1VBUjwvdGV4dD48L3N2Zz4='
    },
    'volvo': {
        name: 'Volvo',
        country: 'Sweden',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTgiIGZpbGw9IiMwMDQ4ODciIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGNpcmNsZSBjeD0iNjAiIGN5PSI0NSIgcj0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTTQ1IDYwTDc1IDYwTTUyIDc1TDY4IDc1IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMyIvPjx0ZXh0IHg9IjYwIiB5PSI5NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Vk9MVk88L3RleHQ+PC9zdmc+'
    },
    'tesla': {
        name: 'Tesla',
        country: 'United States',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjExNiIgaGVpZ2h0PSI4MCIgeD0iMiIgeT0iMjAiIGZpbGw9IiNFRDFDMjQiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0IiByeD0iMTAiLz48cGF0aCBkPSJNMzAgNDBMOTAgNDBNNjAgNDBMNjAgODAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHRleHQgeD0iNjAiIHk9IjY4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5URVNMQTX0ZXh0Pjwvc3ZnPg=='
    },
    'mazda': {
        name: 'Mazda',
        country: 'Japan',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTgiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTMwIDQwTDkwIDQwTDc1IDgwTDQ1IDgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiLz48dGV4dCB4PSI2MCIgeT0iNjgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1BWkRBPC90ZXh0Pjwvc3ZnPg=='
    },
    'hyundai': {
        name: 'Hyundai',
        country: 'South Korea',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGVsbGlwc2UgY3g9IjYwIiBjeT0iNjAiIHJ4PSI1OCIgcnk9IjM1IiBmaWxsPSIjMDAyQzVGIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik00MCA0NUw4MCA0NU00MCA3NUw4MCA3NSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiLz48dGV4dCB4PSI2MCIgeT0iNjgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhZVU5EQUk8L3RleHQ+PC9zdmc+'
    },
    'kia': {
        name: 'Kia',
        country: 'South Korea',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjExNiIgaGVpZ2h0PSI3MCIgeD0iMiIgeT0iMjUiIGZpbGw9IiNGRjAwMDAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0IiByeD0iMTAiLz48dGV4dCB4PSI2MCIgeT0iNjgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPktJQTwvdGV4dD48L3N2Zz4='
    },
    'peugeot': {
        name: 'Peugeot',
        country: 'France',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlnb24gcG9pbnRzPSI0MCwyNSA4MCwyNSA5MCw2MCA4MCw5NSA0MCw5NSAzMCw2MCIgZmlsbD0iIzAwOTZENiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjUwIiByPSI4IiBmaWxsPSIjRkZGRkZGIi8+PHRleHQgeD0iNjAiIHk9IjgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QRVVHRU9UPC90ZXh0Pjwvc3ZnPg=='
    },
    'renault': {
        name: 'Renault',
        country: 'France',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlnb24gcG9pbnRzPSI2MCwyMCA4NSw0NSA4NSw3NSA2MCwxMDAgMzUsNzUgMzUsNDUiIGZpbGw9IiNGRkQ3MDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHRleHQgeD0iNjAiIHk9IjY1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SRU5BVUxUPC90ZXh0Pjwvc3ZnPg=='
    },
    'chevrolet': {
        name: 'Chevrolet',
        country: 'United States',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlnb24gcG9pbnRzPSI2MCwyNSA4NSw0NSA4NSw3NSA2MCw5NSAzNSw3NSAzNSw0NSIgZmlsbD0iI0ZGRDcwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNNDUgNDBMNzUgNDBNNDUgNjBMNzUgNjBNNDUgODBMNzUgODAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNjAiIHk9IjEwNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q0hFVlJPTEVUPC90ZXh0Pjwvc3ZnPg=='
    },
    'lexus': {
        name: 'Lexus',
        country: 'Japan',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTgiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGVsbGlwc2UgY3g9IjYwIiBjeT0iNjAiIHJ4PSIzNSIgcnk9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMyIvPjx0ZXh0IHg9IjYwIiB5PSI2OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TEVYVVMaDPC90ZXh0Pjwvc3ZnPg=='
    }
};

// Get all unique countries from the dataset
const getAllCountries = () => {
    const countries = new Set();
    Object.values(CAR_DATA).forEach(car => {
        countries.add(car.country);
    });
    return Array.from(countries);
};

// Get all car brands as an array
const getAllBrands = () => {
    return Object.keys(CAR_DATA);
};

// Get brands from a specific country
const getBrandsByCountry = (country) => {
    return Object.entries(CAR_DATA)
        .filter(([_, data]) => data.country === country)
        .map(([brand, _]) => brand);
};

// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CAR_DATA, getAllCountries, getAllBrands, getBrandsByCountry };
}