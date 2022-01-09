#!/bin/bash

if [ $# -ne 3 ]
then
>&2 echo "Usage: $0 <ftp host> <username> <password>"
exit 1
fi

URL=$1
USERNAME=$2
PASS=$3

which lftp > /dev/null
if [ $? -ne 0 ]
then
>&2 echo "'lftp' is not installed."
exit 2
fi

set -e

lftp -c "set ftp:ssl-allow no; open -u $USERNAME,$PASS $URL; mirror -Rev public_html/ ./public_html  --ignore-time --parallel=10"