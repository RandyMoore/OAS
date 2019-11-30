import flask
from flask import jsonify

from python_flask.models.band import Band
from python_flask.models.guitarist import Guitarist
from python_flask.models.singer import Singer
from python_flask.models.drummer import Drummer


def bands():  # noqa: E501
    """bands

    Get the bands # noqa: E501


    :rtype: List[Band]
    """
    # In real life this would come from a database, ORM, etc
    ragers = Band(  # arguments copied from Band.__init__; easy to get right
        name='Raging Children',
        guitarist=Guitarist(
            name='Fred',
            axe='air'
        ),
        singer=Singer(
            name='Flo',
            hair_length=0,
        ),
        drummer=Drummer(
            name='Franny',
            head_banger=True
        )
    )

    smooth_actors = Band(
        name='Smooth Actors',
        guitarist=Guitarist(
            name='Marvin',
            axe='mandolin'
        ),
        singer=Singer(
            name='Marlin',
            hair_length=30
        ),
        drummer=Drummer(
            name='Melvin',
            head_banger=False
        )
    )
    return jsonify([ragers, smooth_actors])


def static(resource):
    """static

    Serves static files # noqa: E501

    :param resource: Name of resource to fetch
    :type resource: str

    :rtype: None
    """

    return flask.send_from_directory('/usr/src/app/public', resource)
