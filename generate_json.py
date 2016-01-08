import os
import json
NON_DIRECTORY = ['.git', 'content']


def get_list_file(directory):
    return os.walk(directory).next()[2]


def get_list_dir(directory):
    return os.walk(directory).next()[1]


def travel(directory):
    dict = {}
    list_dir = get_list_dir(directory)
    list_file = get_list_file(directory)

    items = []
    for dir in list_dir:
        if dir[0] != '.' and dir not in NON_DIRECTORY:
            dict[dir] = travel(directory + '/' + dir)
            items.append(dir)

    for file in list_file:
        items.append(name_part(file))

    items.sort()
    dict['_items'] = items
    return dict


def name_part(file_name):
    return file_name[:file_name.rfind('.')]

if __name__ == '__main__':
    dict = travel('content')
    with open('content/data.json', 'w') as f:
        f.write( json.dumps(
            dict,
            sort_keys=True,
            indent=4,
            separators=(',',': ')
        ))
