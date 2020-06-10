CREATE OR REPLACE TEMP VIEW pointtable AS
SELECT ST_Point(cast(pointtable._c3 as Decimal(24,20))
    , cast(pointtable._c4 as Decimal(24,20))) as pointStart
    , ST_Point(cast(pointtable._c5 as Decimal(24,20))
    , cast(pointtable._c6 as Decimal(24,20))) as pointEnd
    , cast(_c1 as timestamp) as timeStart
    , cast(_c2 as timestamp) as timeEnd
FROM pointtable

